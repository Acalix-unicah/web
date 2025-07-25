import type { CSSProperties } from "react";
import type { SectionProps } from "../../../api/namespaces/sectionType";

export default function Section(prop: SectionProps & React.HTMLAttributes<HTMLElement>) {
    const { children, className, id, dataSection, style, hasRow } = prop;
    const styles: CSSProperties = {
        ...style,
    };
    return <section className={className} id={id} data-section={dataSection} style={styles}>
        <div className={`${hasRow ? "container" : ""}`}>
            <div className={`${hasRow ? "row" : ""}`}>
                {children}
            </div>
        </div>
    </section>
}