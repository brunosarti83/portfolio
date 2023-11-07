import postgresql from '../../assets/postgresql.svg';
import express from '../../assets/express.svg';
import node from '../../assets/node.svg';
import tailwind from '../../assets/tailwind.svg';
import css from '../../assets/css.svg';
import html from '../../assets/html.svg';
import redux from '../../assets/redux.svg';
import react from '../../assets/react.svg';

export default function BottomBar() {
  return (
    <div className="flex flex-row-reverse gap-4 ml-auto mr-16 max-h-28px">
        <img src={postgresql} alt={'postgresql'}/>
        <img src={express} alt={'express'}/>
        <img src={node} alt={'node'}/>
        <img src={tailwind} alt={'tailwind'}/>
        <img src={css} alt={'css'}/>
        <img src={html} alt={'html'}/>
        <img src={redux} alt={'redux'}/>
        <img src={react} alt={'react'}/>
    </div>
  )
}
