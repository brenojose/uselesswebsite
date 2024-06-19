class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.c = 0; // Initial color to avoid 0 value
        this.isX = false; // Flag to determine if this block should draw an "X"
    }

    display() {
        noFill();
        stroke(this.c);
        strokeWeight(0.8);
        push();
        translate(this.x, this.y);

        if (this.isX) {
            rotate(this.angle); // Rotate the block if it's part of a letter
            this.drawX();
        } else {
            rotate(this.angle);
            if (this.angle > 180 && this.angle < 300) {
                this.drawRect();
                this.c = color(160, 160, 255);
                if (randomTrail) {
                    this.c = color(random(255), random(255), random(255));
                }
            } else if (this.angle > 300 && this.angle <= 370) {
                this.drawCirc();
                this.c = color(120, 120, 255);
                if (randomTrail) {
                    this.c = color(random(255), random(255), random(255));
                }
            } else if (this.angle > 120 && this.angle < 180) {
                this.drawX();
                this.c = color(200, 200, 255);
                if (randomTrail) {
                    this.c = color(random(255), random(255), random(255));
                }
            } else {
                this.drawX();
                this.c = color(255, 255, 255);
                if (randomTrail) {
                    this.c = color(random(255), random(255), random(255));
                }
            }
        }
        pop();
    }

    move() {
        // Allow rotation for blocks that are part of letters
        let distance;
        let g = slider.value();
        if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
            distance = dist(mouseX, mouseY, this.x, this.y);
            if (distance < distMouse) {
                this.angle += 1;
            }
        }

        // If squares are already rotating, keep rotating until angle = 360
        if (this.angle > 0 && this.angle < 360) {
            this.angle += 10;
        } else {
            this.angle = 0;
            if (!this.isX) {
                this.c = 70 - random(g);
            }
        }
    }

    drawRect() {
        rect(0, 0, size - offset, size - offset);
    }

    drawX() {
        let margin = -size / 2;
        line(margin + offset / 2, margin + offset / 2, margin + size - offset / 2, margin + size - offset / 2);
        line(margin + size - offset / 2, margin + offset / 2, margin + offset / 2, margin + size - offset / 2);
    }

    drawCirc() {
        circle(0, 0, size - offset / 2);
    }

    setToX(c) {
        this.isX = true; // Set the flag to true
        this.c = c; // Set color
    }


}
