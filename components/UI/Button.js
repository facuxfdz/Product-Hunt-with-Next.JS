import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

const Button = (props) => {

    const ButtonComp = props.bgColor

        ? ( 
            <Link href={props.children}>
                <a
                className={utilStyles.styledButtonBg}>
                    {props.children}
                </a> 
            </Link>
        )
        : (
            <Link href={props.children}>
                <a 
                href={props.children}
                className={utilStyles.styledButton}>
                    {props.children}
                </a>
            </Link>
        )

    return ButtonComp;
}
 
export default Button;