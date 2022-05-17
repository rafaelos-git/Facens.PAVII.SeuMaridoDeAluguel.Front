import cozinheiro from '../assets/cozinheiro.png'
import eletricista from '../assets/eletricista.png'
import escritora from '../assets/escritora.png'
import pedreiro from '../assets/pedreiro.png'
import manicure from '../assets/manicure.png'

const workers = [
    {
        id: 0,
        name: "Roberto Sandoval",
        bio: "Eletricista com alto nível de conhecimento e experiência profissional",
        skills: "Eletricista",
        avatar_url: eletricista,
        location: {
            coordinates: [ -47.481435, -23.497328 ],
            type: "Point"
        }
    },
    {
        id: 1,
        name: "Eliana de Paula",
        bio: "Confiabilidade garantida",
        skills: "Manicure",
        avatar_url: manicure,
        location: {
            coordinates: [ -47.479861, -23.493643 ],
            type: "Point"
        }
    },
    {
        id: 2,
        name: "Marcos Silva",
        bio: "Pedreiro experiente",
        skills: "Pedreiro(a)",
        avatar_url: pedreiro,
        location: {
            coordinates: [ -47.483137, -23.492610 ],
            type: "Point"
        }
    },
    {
        id: 3,
        name: "Ana Maria",
        bio: "A vida é uma sucessão de sucessões sucessivas, que se sucessedem sucessivamente...",
        skills: "Escritor(a)",
        avatar_url: escritora,
        location: {
            coordinates: [ -47.486762, -23.492998 ],
            type: "Point"
        }
    },
    {
        id: 4,
        name: "Edmar dos Santos",
        bio: "Cozinheiro com experiência internacional",
        skills: "Cozinheiro(a)",
        avatar_url: cozinheiro,
        location: {
            coordinates: [ -47.490152, -23.493697 ],
            type: "Point"
        }
    },
]

export default workers