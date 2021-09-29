import { PageHeader } from 'antd';
import 'antd/dist/antd.css';

const Header = () => {
    return (
        <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
        />
    )
}

export default Header