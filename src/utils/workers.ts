import cozinheiro from '../assets/cozinheiro.png'
import eletricista from '../assets/eletricista.png'
import escritora from '../assets/escritora.png'
import pedreiro from '../assets/pedreiro.png'
import manicure from '../assets/manicure.png'

import primeiroLivro from '../assets/livros-1.png'
import segundoLivro from '../assets/livros-2.png'
import terceiroLivro from '../assets/livros-3.png'
import quartoLivro from '../assets/livros-4.png'

import primeiraObra from '../assets/obra-1.png'
import segundaObra from '../assets/obra-2.png'
import terceiraObra from '../assets/obra-3.png'
import quartaObra from '../assets/obra-4.png'

import primeiraEletrica from '../assets/eletrica-1.png'
import segundaEletrica from '../assets/eletrica-2.png'
import terceiraEletrica from '../assets/eletrica-3.png'
import quartaEletrica from '../assets/eletrica-4.png'

import primeiraManicure from '../assets/manicure-1.png'
import segundaManicure from '../assets/manicure-2.png'
import terceiraManicure from '../assets/manicure-3.png'
import quartaManicure from '../assets/manicure-4.png'

import primeiraComida from '../assets/comida-1.png'
import segundaComida from '../assets/comida-2.png'
import terceiraComida from '../assets/comida-3.png'
import quartaComida from '../assets/comida-4.png'

const workers = [
    {
        id: 0,
        name: "Roberto Sandoval",
        bio: "Eletricista com alto nível de conhecimento e experiência profissional",
        skills: "Eletricista",
        horarios: ['06:00', '08:00', '10:00', '14:00', '16:00', '18:00'],
        avatar_url: eletricista,
        pictures: [ primeiraEletrica, segundaEletrica, terceiraEletrica, quartaEletrica ],
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
        horarios: ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
        avatar_url: manicure,
        pictures: [ primeiraManicure, segundaManicure, terceiraManicure, quartaManicure ],
        location: {
            coordinates: [ -47.479861, -23.493643 ],
            type: "Point"
        }
    },
    {
        id: 2,
        name: "Marcos Silva",
        bio: "Recebaaa! O Luva de Predero é o Melhor do Mundo!",
        skills: "Pedreiro(a)",
        horarios: ['06:00', '10:00', '15:00'],
        avatar_url: pedreiro,
        pictures: [ primeiraObra, segundaObra, terceiraObra, quartaObra ],
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
        horarios: ['10:00', '11:00', '15:00', '17:00'],
        avatar_url: escritora,
        pictures: [ primeiroLivro, segundoLivro, terceiroLivro, quartoLivro ],
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
        horarios: ['11:00', '12:00', '13:00', '17:00', '18:00', '19:00'],
        avatar_url: cozinheiro,
        pictures: [ primeiraComida, segundaComida, terceiraComida, quartaComida ],
        location: {
            coordinates: [ -47.490152, -23.493697 ],
            type: "Point"
        }
    },
    {
        id: 5,
        name: "Eliezer de Oliveira",
        bio: "Eletricista com alto nível de conhecimento e experiência profissional",
        skills: "Eletricista",
        horarios: ['06:00', '08:00', '10:00', '14:00', '16:00', '18:00'],
        avatar_url: eletricista,
        pictures: [ primeiraEletrica, segundaEletrica, terceiraEletrica, quartaEletrica ],
        location: {
            coordinates: [ -47.444433, -23.487440 ],
            type: "Point"
        }
    },
    {
        id: 6,
        name: "Roberta Ferreira",
        bio: "Confiabilidade garantida",
        skills: "Manicure",
        horarios: ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
        avatar_url: manicure,
        pictures: [ primeiraManicure, segundaManicure, terceiraManicure, quartaManicure ],
        location: {
            coordinates: [ -47.468702, -23.484567 ],
            type: "Point"
        }
    },
    {
        id: 7,
        name: "Edvandro Morça",
        bio: "Recebaaa! O Luva de Predero é o Melhor do Mundo!",
        skills: "Pedreiro(a)",
        horarios: ['06:00', '10:00', '15:00'],
        avatar_url: pedreiro,
        pictures: [ primeiraObra, segundaObra, terceiraObra, quartaObra ],
        location: {
            coordinates: [ -47.477762, -23.491659 ],
            type: "Point"
        }
    },
    {
        id: 8,
        name: "Marina Machado",
        bio: "A vida é uma sucessão de sucessões sucessivas, que se sucessedem sucessivamente...",
        skills: "Escritor(a)",
        horarios: ['10:00', '11:00', '15:00', '17:00'],
        avatar_url: escritora,
        pictures: [ primeiroLivro, segundoLivro, terceiroLivro, quartoLivro ],
        location: {
            coordinates: [ -47.479843, -23.495703 ],
            type: "Point"
        }
    },
    {
        id: 9,
        name: "Gustava Lima",
        bio: "Cozinheiro com experiência internacional",
        skills: "Cozinheiro(a)",
        horarios: ['11:00', '12:00', '13:00', '17:00', '18:00', '19:00'],
        avatar_url: cozinheiro,
        pictures: [ primeiraComida, segundaComida, terceiraComida, quartaComida ],
        location: {
            coordinates: [ -47.482494, -23.502259 ],
            type: "Point"
        }
    },
    {
        id: 10,
        name: "Rogério Pereira",
        bio: "Eletricista com alto nível de conhecimento e experiência profissional",
        skills: "Eletricista",
        horarios: ['06:00', '08:00', '10:00', '14:00', '16:00', '18:00'],
        avatar_url: eletricista,
        pictures: [ primeiraEletrica, segundaEletrica, terceiraEletrica, quartaEletrica ],
        location: {
            coordinates: [ -47.467367, -23.516517 ],
            type: "Point"
        }
    },
    {
        id: 11,
        name: "Juliana Paes",
        bio: "Confiabilidade garantida",
        skills: "Manicure",
        horarios: ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
        avatar_url: manicure,
        pictures: [ primeiraManicure, segundaManicure, terceiraManicure, quartaManicure ],
        location: {
            coordinates: [ -47.472710, -23.519498 ],
            type: "Point"
        }
    },
    {
        id: 12,
        name: "Leonardo Gomes",
        bio: "Recebaaa! O Luva de Predero é o Melhor do Mundo!",
        skills: "Pedreiro(a)",
        horarios: ['06:00', '10:00', '15:00'],
        avatar_url: pedreiro,
        pictures: [ primeiraObra, segundaObra, terceiraObra, quartaObra ],
        location: {
            coordinates: [ -47.473177, -23.517422 ],
            type: "Point"
        }
    },
    {
        id: 13,
        name: "Joana Banana",
        bio: "A vida é uma sucessão de sucessões sucessivas, que se sucessedem sucessivamente...",
        skills: "Escritor(a)",
        horarios: ['10:00', '11:00', '15:00', '17:00'],
        avatar_url: escritora,
        pictures: [ primeiroLivro, segundoLivro, terceiroLivro, quartoLivro ],
        location: {
            coordinates: [ -47.428899, -23.471233 ],
        }
    },
    {
        id: 14,
        name: "Vinícius Henrique",
        bio: "Cozinheiro com experiência internacional",
        skills: "Cozinheiro(a)",
        horarios: ['11:00', '12:00', '13:00', '17:00', '18:00', '19:00'],
        avatar_url: cozinheiro,
        pictures: [ primeiraComida, segundaComida, terceiraComida, quartaComida ],
        location: {
            coordinates: [ -47.431050, -23.470003 ],
            type: "Point"
        }
    },
    {
        id: 15,
        name: "Rubens Barrichelo",
        bio: "Eletricista com alto nível de conhecimento e experiência profissional",
        skills: "Eletricista",
        horarios: ['06:00', '08:00', '10:00', '14:00', '16:00', '18:00'],
        avatar_url: eletricista,
        pictures: [ primeiraEletrica, segundaEletrica, terceiraEletrica, quartaEletrica ],
        location: {
            coordinates: [ -47.428491, -23.468315 ],
            type: "Point"
        }
    },
    {
        id: 16,
        name: "Mércia Arantes",
        bio: "Confiabilidade garantida",
        skills: "Manicure",
        horarios: ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
        avatar_url: manicure,
        pictures: [ primeiraManicure, segundaManicure, terceiraManicure, quartaManicure ],
        location: {
            coordinates: [ -47.428767, -23.469758 ],
            type: "Point"
        }
    },
    {
        id: 17,
        name: "Rodrigo de Moraes",
        bio: "Recebaaa! O Luva de Predero é o Melhor do Mundo!",
        skills: "Pedreiro(a)",
        horarios: ['06:00', '10:00', '15:00'],
        avatar_url: pedreiro,
        pictures: [ primeiraObra, segundaObra, terceiraObra, quartaObra ],
        location: {
            coordinates: [ -47.425405, -23.467717 ],
            type: "Point"
        }
    },
    {
        id: 18,
        name: "Vitória dos Santos",
        bio: "A vida é uma sucessão de sucessões sucessivas, que se sucessedem sucessivamente...",
        skills: "Escritor(a)",
        horarios: ['10:00', '11:00', '15:00', '17:00'],
        avatar_url: escritora,
        pictures: [ primeiroLivro, segundoLivro, terceiroLivro, quartoLivro ],
        location: {
            coordinates: [ -47.429847, -23.464917 ],
            type: "Point"
        }
    },
    {
        id: 19,
        name: "Leandro Soares",
        bio: "Cozinheiro com experiência internacional",
        skills: "Cozinheiro(a)",
        horarios: ['11:00', '12:00', '13:00', '17:00', '18:00', '19:00'],
        avatar_url: cozinheiro,
        pictures: [ primeiraComida, segundaComida, terceiraComida, quartaComida ],
        location: {
            coordinates: [ -47.435662, -23.461797 ],
            type: "Point"
        }
    },
]

export default workers