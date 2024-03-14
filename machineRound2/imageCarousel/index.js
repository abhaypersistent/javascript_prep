
class Carousel {
    constructor(root){
        this.image = ['1.png','2.png','3.png','4.png','5.png','6.png']
        this.currentImage = 1;
        this.root = root;
        this.infinite = false;
        this.autoplay = false;
        this.imageTag = document.getElementById('image-src');
        this.previousBtn = document.getElementById('previous');
        this.nextBtn = document.getElementById('next');
        this.addEventListener();
        this.loadImage()
    }

    addEventListener(){
        this.root.addEventListener('click', (e) => {
            switch (e.target.id) {
                case 'previous':
                    console.log('previous');
                    this.previous(e.target);
                    break;
                case 'next':
                    console.log('next');
                    this.next();
                    break;
                case 'infinite':
                    console.log(e.target.checked)
                    console.log('infinite');
                    this.infinite = e.target.checked;
                    break;
                case 'autoplay':
                    console.log('autoplay');
                    break;
                case 'range':
                    console.log('range');
                    break;
            
                default:
                    break;
            }
        })
    }

    previous(){
        if(!this.infinite && this.currentImage == 0){
            this.previousBtn.classList.add('disable')
            return;
        }
        this.previousBtn.classList.remove('disable')
        this.currentImage -= 1;
        if(this.currentImage == 0) this.currentImage +=this.image.length;
        this.loadImage();
    }

    next(){
        if(!this.infinite && this.currentImage == this.image.length){
            this.nextBtn.classList.add('disable');
            return;
        }
        this.nextBtn.classList.remove('disable');
        this.currentImage += 1;
        this.currentImage %= this.image.length;
        this.loadImage();
    }


    loadImage(){
        this.imageTag.src = `./images/${this.currentImage}.png`;
    }
}

const root = document.getElementById('root');
const carasuel = new Carousel(root);