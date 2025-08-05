// Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form handling
        document.querySelector('.contact-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone_number: document.getElementById('phone').value,
                description: document.getElementById('usecase').value
            };
            
            const submitButton = document.querySelector('.form-submit');
            const successMessage = document.getElementById('formSuccess');
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';
            
            try {
                const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:npUh9o7P/webhook', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    // Show success message
                    successMessage.style.display = 'block';
                    // Reset form
                    this.reset();
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                // Show error in the success message area
                successMessage.style.display = 'block';
                successMessage.style.background = 'rgba(239, 68, 68, 0.1)';
                successMessage.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                successMessage.style.color = '#ef4444';
                successMessage.textContent = 'Something went wrong. Please try again.';
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = 'Get Demo of Agent John';
            }
        });

        // Video click handler
        document.querySelector('.hero-video').addEventListener('click', function() {
            alert('Agent John demo video would play here!');
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(37, 99, 235, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.9)';
                navbar.style.boxShadow = 'none';
            }
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Initialize animations
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.feature-item, .pricing-card');
            
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });