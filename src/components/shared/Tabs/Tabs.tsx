import React, { useState, type CSSProperties } from 'react';
import Section from '../sections/section';
import './_rules.css';
type TabsSectionProps = {
    title: string;
    backgroundImageSrc?: string;
}

type TabsItemProps = {
    tabs: TabsProps[];
}

export type TabsProps = {
    title: string;
    content: string;
    imageSrc: string;
}

export default function Tabs(props: TabsSectionProps & React.HTMLAttributes<HTMLDivElement>) {
    const { title, children, backgroundImageSrc } = props;
    const styles: CSSProperties = {
        backgroundImage: `url(${backgroundImageSrc})`,
    }
    return <Section className="why-us" style={styles} hasContainer hasRow>
        <div className="col-md-12">
            <div className="section-heading">
                <h2>{title}</h2>
            </div>
        </div>
        <div className="col-md-12">
            {children}
        </div>
    </Section>
}

Tabs.Item = function TabsItem(props: TabsItemProps & React.HTMLAttributes<HTMLDivElement>) {
    const { tabs } = props;
    const [itemSelected, setItemSelected] = useState(0);
    function handleUpdateItemSelected(index: number) {
        setItemSelected(index);
    }
    return <div id='tabs'>
        <ul>
            {tabs.map((tab, index) => (
                <li key={index} className={`${index === itemSelected ? 'ui-tabs-active' : ''}`}><a onClick={() => handleUpdateItemSelected(index)}>{tab.title}</a></li>
            ))}
        </ul>
        <section className='tabs-content'>
            {tabs.map((tab, index) => {
                return (
                    <article id={`tabs-${index + 1}`} key={index} className={index === itemSelected ? 'active-tab' : 'inactive-tab'}>
                        <div key={index} className="row tab-item">
                            <div className="col-md-6">
                                <img src={tab.imageSrc} alt="" />
                            </div>
                            <div className="col-md-6">
                                <h4>{tab.title}</h4>
                                <p>{tab.content}</p>
                            </div>
                        </div>
                    </article>
                );
            })}
        </section>
    </div>
}