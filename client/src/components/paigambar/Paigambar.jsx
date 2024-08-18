import React, { useState } from 'react';
import './Paigambar.css';
import Ali from '../../../public/Без названия (1).jpeg';
import Jusup from '../../../public/Без названия.jpeg';
import abu from '../../../public/Без названия (2).jpeg';
import isra from '../../../public/images.jpeg';
import prorok from '../../../public/Без названия (3).jpeg';


const Paigambar = () => {
    const [nasaat, setNasaat] = useState([
        { name: 'Мухаммед с.а.в', description: '"Эй адамдар байлык мал-мүлктүн көптүгүндө эмес.  Чыныгы байлык жан дүйнөнүн байлыгы. Анткени, Улуу Аллах пендесинин тагдырына жазылган ырыскыны ага сөзсүз берет. Андыктан ырыскыны жакшы жолдо издегиле, адалын алгыла, арамын таштагыла".', img: prorok },
        { name: 'Мухаммед с.а.в', description: 'Жылуу сөз,  жумшак мамиле  көңүл ачкычы деген', img: prorok },
        { name: 'Жусуп Баласагын', description: '✨"Көп тыңда,бирок аз сүйлө. Акылга салып сөз сүйлө,аны тажрыйба, билим менен', img: Jusup },
        { name: 'Азирети Али', description: 'Колдон келсе, наадан, түркөй адам менен сүйлөшпө! Андайлардын тили уулуу болгондуктан, көңүлүңдү оорутуп коюшу ыктымал', img: Ali },
        { name: 'Азирети Абу Бакр', description: 'Көп сөз адамды унутчаак кылат', img: abu },
        { name: 'Исра сүрөсү, 53-аят', description: '✨"Кулдарыма айт! Сөздүн эң жакшысын сүйлөсүн..."', img: isra },
    ]);

    return (
        <div className="container">
            <div className="card-container" >
                {nasaat.map((item, index) => (
                    item.name && item.description && (
                        <div key={index} className="card">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src={item.img} alt={item.name} className="card-image" />
                                    <h2 className="card-title">{item.name}</h2>
                                </div>
                                <div className="card-back">
                                    <p className="card-description">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default Paigambar;
