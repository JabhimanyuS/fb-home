const posts = [
    {
        author: 'Abhimanyu Singh',
        content: 'My brother has his sword, King Robert has his warhammer and I have my mind...and a mind needs books as a sword needs a whetstone if it is to keep its edge. That\'s why I read so much Jon Snow.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'Oh, monster? Perhaps you should speak to me more softly then. Monsters are dangerous and just now Kings are dying like flies.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'Lannister, Targaryen, Baratheon, Stark, Tyrell... they\'re all just spokes on a wheel. This one\'s on top, then that one\'s on top, and on and on it spins, crushing those on the ground.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'Power resides only where men believe it resides…. [It is] a shadow on the wall, yet shadows can kill. And ofttimes a very small man can cast a very large shadow.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'There are no true knights, no more than there are gods. If you can’t protect yourself, die and get out of the way of those who can. Sharp steel and strong arms rule this world, don’t ever believe any different.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'A Lannister always pays his debts.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'The greatest fools are ofttimes more clever than the men who laugh at them.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'A lord must learn that sometimes words can accomplish what swords cannot.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'The things we love destroy us every time.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'We are only human, and the gods have fashioned us for love. That is our great glory, and our great tragedy'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'You may be as different as the sun and the moon, but the same blood flows through both your hearts. You need her, as she needs you…'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'I crossed a thousand leagues to come to you, and lost the best part of me along the way. Don’t tell me to leave.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'Love is the bane of honor, the death of duty.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'The man who passes the sentence should swing the sword. If you would take a man’s life, you owe it to him to look into his eyes and hear his final words. And if you cannot bear to do that, then perhaps the man does not deserve to die.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'A reader lives a thousand lives before he dies… the man who never reads lives only once.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'A mind needs books as a sword needs a whetstone, if it is to keep its edge.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'Sleep is good… and books are better.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'People often claim to hunger for truth, but seldom like the taste when it’s served up.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'I rose too high, loved too hard, dared too much. I tried to grasp a star, overreached, and fell.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'Any man who must say ‘I am king’ is no true king at all.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'I swear to you, sitting a throne is a thousand times harder than winning one.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'Once you’ve accepted your flaws, no one can use them against you.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'There is gold in the streets just waiting for someone to come and scoop it up.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'You are not the guy. You’re not capable of being the guy. I had a guy, but now I don’t. You are not the guy.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'Ah, like I came to you, begging to cook meth. Oh, hey, nerdiest old dude I know, you wanna come cook crystal? Please. I’d ask my diaper-wearing granny, but her wheelchair wouldn’t fit in the RV'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'We tried to poison you. We tried to poison you because you are an insane, degenerate piece of filth and you deserve to die.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'If you try to interfere, this becomes a much simpler matter. I will kill your wife. I will kill your son. I will kill your infant daughter.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'The moral of the story is…I chose a half measure, when I should have gone all the way. I’ll never make that mistake again. No more half measures, Walter.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'I did it for me. I liked it. I was good at it. And, I was really…I was alive.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'Jesse, you asked me if I was in the meth business, or the money business… Neither. I’m in the empire business.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'My name is Walter Hartwell White. I live at 308 Negra Aroya Lane, Albuquerque, New Mexico, 87104. To all law enforcement entities, this is not an admission of guilt. I am speaking to my family now. Skyler, you are the love of my life. I hope you know that. Walter Jr., you’re my big man. There are going to be some things that you’ll come to learn about me in the next few days. But just know that no matter how it may look, I only had you in my heart. Goodbye.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'You’re the smartest guy I’ve ever met. And you’re too stupid to see… he made up his mind ten minutes ago'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'Well, technically, chemistry is the study of matter. But I prefer to see it as the study of change.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'I am not in danger, I am the danger.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'If you don’t know who I am, then maybe your best course would be to tread lightly.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'I’m not saying it’s not bad. It’s bad. But it could be worse.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'If you’re committed enough, you can make any story work. I once told a woman I was Kevin Costner and it worked because I believed it'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'I mean, it’s just..it’s the constant, it’s the cycle. It’s solution, dissolution, just over and over and over. It is growth, then decay, then transformation. It is fascinating, really.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'And a man, a man provides. And he does it even when he’s not appreciated, or respected, or even loved. He simply bears up and he does it. Because he’s a man.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'I have lived under the threat of death for a year now. And because of that, I’ve made choices.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'We’re all on the same page. The one that says, if I can’t kill you, you’ll sure as shit wish you were dead.'
    },
    {
        author: 'Abhimanyu Singh',
        content: 'You know what Walt? Someone needs to protect this family from the man who protects this family.'
    },
    {
        author: 'Abhimanyu Singh',
        content: ':) :)'
    }
]

export default posts