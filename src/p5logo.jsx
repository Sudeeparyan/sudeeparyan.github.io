import { useEffect, useRef } from 'react';
import p5 from 'p5';
import imgtest from './Images/logo/sudeep.PNG'

// let imgtest = './Images/logo/vicky.png'

let pageTheme;
function sketch(p5) {
    // p is a reference to the p5 instance this sketch is attached to
    let particles=[]
    let img;
    let sc=1.5;
    let bgalpha=255;
    const particleSplitLevel=0;
    p5.preload = function(){
        console.log("imgtest",imgtest)
        p5.loadImage(imgtest,s => {
            img = s;
            console.log("image",img);
            p5.redraw()
        });
    }
    // p5.preload = function() {
    //     img = p5.loadImage('/Images/logo/name.jpg'); // Use the public path
    // }

    p5.setup = function() {
        p5.createCanvas(p5.windowWidth , p5.windowHeight );
        let tsc = p5.windowWidth / img.width;
        if (tsc > sc) {
            sc = tsc;
        }
        img.loadPixels();
    
        for (let i = 0; i < img.width; i++) {
            for (let j = 0; j < img.height; j++) {
                if(img.pixels[i*4+img.width*4*j]>200){
                    if(p5.windowWidth<p5.windowHeight){
                        // Mobile
                        particles.push(new Particle(-10+i*sc,p5.windowHeight/4+j*sc,sc))
                    }
                    else{
                        // Desktop
                        const particle = new Particle(i*sc,j*sc,sc)
                        particles.push(...particle.split(particleSplitLevel))
                        
                    }
                }
            }
        }
        console.log(particles.length);
        
    }
    p5.draw = function() {
        // your draw code here
        if(pageTheme==="light"){

            p5.background(255,bgalpha);
        }
        else{
            p5.background(0,bgalpha);
            
        }
        // image(img,0,0,img.width,img.height)
    
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            // if (p.pos.x == p.initpos.x && p.pos.y == p.initpos.y) continue;
            p.update()
            p.show()
            if(p5.dist(p.pos.x,p.pos.y,p5.mouseX,p5.mouseY)<sc*5){
                let point=p.pos.copy();
                let mouse=p5.createVector(p5.mouseX,p5.mouseY)
                let diff=point.sub(mouse)
                let dir=diff.normalize()
                let newvel=dir.mult(sc*3)
                // console.log(point);
                p.vel=newvel
    
            }
        }
    }
    class Particle {
        constructor(x,y,size) {
        this.initpos=p5.createVector(x,y)
        this.pos = p5.createVector(x,y);
        this.vel = p5.createVector(0,0);
          this.acc = p5.createVector(0,0);
          this.maxspeed = 10;
          this.color=0
          this.size = size;
        }
      
        update() {
                let desired= p5.constructor.Vector.sub(this.initpos,this.pos);
                desired.setMag(this.initpos.dist(this.pos)/20);
                let steering=p5.constructor.Vector.sub(desired,this.vel);
                steering.mult(0.1)
                this.acc.add(steering)
            
    
          this.vel.add(this.acc);
          this.vel.limit(this.maxspeed);
          this.pos.add(this.vel);
          this.acc.mult(0);
        }
        show(){
            p5.noStroke()
            let pointdist=Math.round(this.initpos.dist(this.pos));
            let varclr=p5.map(pointdist,0,this.size*5,0,255)
            if(pageTheme==="light"){
                // shadow consumes more processing power
                // p5.drawingContext.shadowColor = p5.color(varclr,0,0);
                p5.fill(varclr,0,0)
            }
            else{
                // p5.drawingContext.shadowColor = p5.color(varclr,varclr,0);
                p5.fill(255,255,255-varclr)
                
            }
            p5.ellipse(this.pos.x,this.pos.y,this.size)
        }
        split(n){
            if (n === 0) {
                return [this];
            }
            const x = this.pos.x;
            const y = this.pos.y;
            const size = this.size/2;
            const originOffset = size/2;

            const topleft = new Particle(x - originOffset, y - originOffset, size)
            const topright =  new Particle(x + originOffset, y - originOffset, size)
            const bottomleft = new Particle(x - originOffset, y + originOffset, size)
            const bottomright = new Particle(x + originOffset, y + originOffset, size)
            const splits = [
                ...topleft.split(n - 1),
                ...topright.split(n - 1),
                ...bottomleft.split(n - 1),
                ...bottomright.split(n - 1)
            ]

            return splits;
        }
    }  
}

function P5logo({theme}) {
    const p5ContainerRef = useRef();
pageTheme=theme;
    useEffect(() => {
        // On component creation, instantiate a p5 object with the sketch and container reference 
        const p5Instance = new p5(sketch, p5ContainerRef.current);

        // On component destruction, delete the p5 instance
        return () => {
            p5Instance.remove();
        }
    }, []);

    return (
        <div>
            {/* <h2>Sudeep</h2> */}
            <div className="App" ref={p5ContainerRef} />
        </div>

        
    );
}

export default P5logo

