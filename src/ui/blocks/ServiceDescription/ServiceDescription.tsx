import React from 'react';
import { Text } from '@/ui/components/Text/Text';
import styles from './ServiceDescription.module.css';

type ServiceSection = {
    title?: string;
    paragraphs?: string[];
    bullets?: string[];
};

type Service = {
    id: string;
    title: string;
    sections: ServiceSection[];
};

type ServiceItemProps = {
    service: Service;
    index: number;
};

const ServiceItem: React.FC<ServiceItemProps> = ({service, index}) => (
    <li className={styles.item} id={service.id}>
        <header className={styles.header}>
            <Text as="span" variant="meta" className={styles.number} aria-hidden="true">
                / {String(index + 1).padStart(2, '0')}
            </Text>
            <Text as="h3" variant="stageTitle" className={styles.title}>
                <a href={`#${service.id}`}>{service.title}</a>
            </Text>
        </header>
        <div className={styles.content}>
            {service.sections.map((section, sectionIndex) => (
                <section className={styles.section} key={`${service.title}-${section.title ?? sectionIndex}`}>
                    {section.title ? <Text as="h4" variant="cardTitle" className={styles.sectionTitle}>{section.title}</Text> : null}
                    {section.paragraphs?.map((paragraph) => (
                        <Text variant="intro" className={styles.copy} key={paragraph}>{paragraph}</Text>
                    ))}
                    {section.bullets ? (
                        <ul className={styles.list}>
                            {section.bullets.map((bullet) => (
                                <li key={bullet}><Text variant="intro">{bullet}</Text></li>
                            ))}
                        </ul>
                    ) : null}
                </section>
            ))}
        </div>
    </li>
);

type ServiceDescriptionProps = {
    services: Service[];
};

export const ServiceDescription: React.FC<ServiceDescriptionProps> = ({services}) => (
    <ol className={styles.listRoot}>
        {services.map((service, index) => (
            <ServiceItem service={service} index={index} key={service.id} />
        ))}
    </ol>
);
