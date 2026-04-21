class Character {
    static characters: Map<number, Character> = new Map();

    id: number;
    name: string;
    level: number;
    health: number;
    mana: number;

    constructor(id: number, name: string, level: number, health: number, mana: number) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.health = health;
        this.mana = mana;
        Character.characters.set(id, this);
    }

    static getById(id: number): Character | undefined {
        return this.characters.get(id);
    }
}

// Ejemplo de uso
const char1 = new Character(1, "Héroe", 10, 100, 50);
const char2 = new Character(2, "Villano", 12, 120, 60);

console.log(Character.getById(1)); // Debería mostrar el héroe
console.log(Character.getById(2)); // Debería mostrar el villano