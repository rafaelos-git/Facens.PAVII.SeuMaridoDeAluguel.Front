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
        avatar_url: cozinheiro,
        pictures: [ primeiraComida, segundaComida, terceiraComida, quartaComida ],
        location: {
            coordinates: [ -47.490152, -23.493697 ],
            type: "Point"
        }
    },
]

export default workers