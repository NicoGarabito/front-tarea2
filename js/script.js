document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.zoomable');

    images.forEach(img => {
        img.addEventListener('click', function() {
            // Si la imagen ya está ampliada, la restaura a su tamaño original
            if (this.classList.contains('zoomed')) {
                this.classList.remove('zoomed');
            } else {
                // Primero elimina la clase zoomed de cualquier otra imagen
                images.forEach(otherImg => otherImg.classList.remove('zoomed'));
                
                // Luego amplía la imagen actual
                this.classList.add('zoomed');
            }
        });
    });
});