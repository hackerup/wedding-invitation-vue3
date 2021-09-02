import { ColorOption, getColor } from "./getColor";
import { Particle } from "./Particle";
import { Trail } from "./Trail";
import { Vector2 } from "./Vector2";

interface ParticleOption extends ColorOption {
    lifetime: number;
    mass: number
}

export type generateParticle = (parent: Trail, opt: ParticleOption) => Particle;

export function generateParticle(parent: Trail, opt: ParticleOption): Particle {

    let { mass, lifetime } = opt;
    const direction = Math.random() * Math.PI * 2;
    const force = 8;
    const velocity = new Vector2(Math.cos(direction) * force, Math.sin(direction) * force);
    const color = getColor(opt);
    const radius = 0.5 + Math.random();
    
    return new Particle(parent.position.clone(), velocity, color, radius, lifetime, mass);
};