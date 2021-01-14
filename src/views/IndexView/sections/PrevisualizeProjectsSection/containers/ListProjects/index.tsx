import React from 'react'
import { config, useTransition } from 'react-spring';
import ProjectCard from '../../components/ProjectCard'


const data = [
    {
        image : "https://cdn.vox-cdn.com/thumbor/vPwf_IT-1YLYwgHmOVDnLaUZRts=/0x0:2048x1410/1200x800/filters:focal(861x542:1187x868)/cdn.vox-cdn.com/uploads/chorus_image/image/67272132/facebook_website_redesign_1.0.jpg"
    },
    {
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3KPdLmoOw77WpfJ_EcbNSoQKHcKI7qYMEw&usqp=CAU"
    },
    {
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwwkPj_3ZyFmaoLRJKQmoJFZQjOg-qZtiOw&usqp=CAU"
    },
    {
        image : "https://i.redd.it/t67an8sbwjg21.png"
    },
]

const dataParse = data.map((e,key) => ({key,...e}));

export default function ListProjects() {

    const transition = useTransition(dataParse,e => e.key,{
        from:  {
            opacity : 0,
            transform : "translateY(-20px)"
        },
        enter: {
            opacity : 1,
            transform : "translateY(0px)"

        },
        leave : {
            opacity : 0,
            transform : "translateY(-20px)"
        },
        trail : 100,
        config : config.wobbly
    });
    
    return (
        <div className="list__projects grid grid-cols-3 gap-y-5 gap-x-5 auto-rows-max grid-flow-row-dense">
            {transition.map(({item,key,props}) => (
                <ProjectCard image={item.image} style={props} key={key} />
            ))}    
        </div>
    )
}
