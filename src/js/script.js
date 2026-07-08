document.addEventListener('DOMContentLoaded', () => {
    
    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        
        // Prevent scrolling on body when menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // --- Scroll Reveal Animations (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- Form Handling ---
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulação de envio
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'Enviando...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.textContent = 'Enviado com sucesso';
                btn.style.borderColor = 'var(--brass-accent)';
                btn.style.color = 'var(--brass-accent)';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.opacity = '1';
                    btn.style.borderColor = '';
                    btn.style.color = '';
                }, 3000);
            }, 1500);
        });
    }

    // --- Input Label Float Logic (Polyfill for :placeholder-shown issue on some browsers if needed) ---
    // CSS já resolve isso com :placeholder-shown e required no HTML, mas podemos garantir.
    const inputs = document.querySelectorAll('.input-group input');
    
    inputs.forEach(input => {
        // Inicial load check
        if(input.value.trim() !== '') {
            input.classList.add('has-value');
        }
        
        input.addEventListener('blur', () => {
            if(input.value.trim() !== '') {
                input.classList.add('has-value');
            } else {
                input.classList.remove('has-value');
            }
        });
    });

    // --- Scroll to Play Video ---
    const processVideo = document.querySelector('.process-video');
    const processSection = document.getElementById('process');
    
    if (processVideo && processSection) {
        let isTicking = false;

        const updateVideoTime = () => {
            // Usa window.scrollY para um cálculo absoluto mais estável
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Posições absolutas na página
            const sectionRect = processSection.getBoundingClientRect();
            const sectionTop = sectionRect.top + scrollY;
            const sectionHeight = sectionRect.height;
            
            const videoRect = processVideo.getBoundingClientRect();
            const videoTop = videoRect.top + scrollY;
            const videoHeight = videoRect.height;
            
            // Ponto de Início: scroll em que o final da tela (scrollY + windowHeight) 
            // ultrapassa 35% da seção
            const startScrollPoint = sectionTop + (sectionHeight * 0.35) - windowHeight;
            
            // Ponto de Fim: scroll em que o final da tela (scrollY + windowHeight) 
            // ultrapassa exatamente a base (fundo) do vídeo
            const endScrollPoint = videoTop + videoHeight - windowHeight;
            
            let progress = 0;
            const scrollDistance = endScrollPoint - startScrollPoint;
            
            if (scrollDistance > 0) {
                progress = (scrollY - startScrollPoint) / scrollDistance;
            } else {
                progress = scrollY >= startScrollPoint ? 1 : 0;
            }
            
            // Limita rigidamente entre 0 e 1
            progress = Math.max(0, Math.min(1, progress));
            
            // Ordem normal: 0 a 1
            
            // Verifica se a duração está disponível e é válida
            if (!isNaN(processVideo.duration) && isFinite(processVideo.duration) && processVideo.duration > 0) {
                try {
                    // Subtrai um milissegundo do fim para evitar que browsers travem no último frame "vazio"
                    const safeDuration = processVideo.duration - 0.01;
                    processVideo.currentTime = safeDuration * progress;
                } catch (e) {
                    console.error("Erro ao definir currentTime do vídeo:", e);
                }
            }
        };
        
        // Dispara o cálculo no carregamento dos metadados para ajustar a posição inicial se a página for recarregada no meio
        processVideo.addEventListener('loadedmetadata', updateVideoTime);
        // Também tenta forçar um play/pause rápido que as vezes é necessário para inicializar buffers em browsers mobile
        let played = false;
        
        window.addEventListener('scroll', () => {
            if (!played) {
                played = true;
                processVideo.play().then(() => {
                    processVideo.pause();
                }).catch(() => {});
            }

            if (!isTicking) {
                window.requestAnimationFrame(() => {
                    updateVideoTime();
                    isTicking = false;
                });
                isTicking = true;
            }
        });
        
        // Chamada inicial
        updateVideoTime();
    }
});
