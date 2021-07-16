class ProjectileGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene){
        super(scene);

        this.createMultiple({
            classType: Projectile,
            frameQuantity: 30,
            active: false,
            visible: false,
            key: 'projectile'
        })

        
    }

    fireProjectile(x, y) {
        let projectile = this.getFirstDead(false);
        if (projectile) {
            projectile.shoot(x, y);
        }
    }
}