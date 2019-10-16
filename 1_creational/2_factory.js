class SimpleMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 350;
    }
}

class MemberFactory {
    list = {
        simple: SimpleMemberShip,
        standard: StandardMemberShip,
        premium: PremiumMemberShip
    }
    create(name, type = 'simple') {
        const Membership = this.list[type];
        const member = new Membership(name);
        member.type = type;
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member;
    }
}

const factory = new MemberFactory();

const members = [
    factory.create("Victor"),
    factory.create("Elena", 'premium'),
    factory.create("Nastya", 'standard'),
    factory.create("Ivan", 'premium'),
];

members.forEach(m => {
    m.define();
});