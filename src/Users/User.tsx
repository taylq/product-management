import { Card } from "antd";

export interface UserProps {
    avatar_url: string,
    login: string,
    id?: number
}

const User: React.FC<UserProps> = ({
   avatar_url,
   login,
   id
}) => {
    const { Meta } = Card;
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={avatar_url} />}
        >
            <Meta title={login} description={login} />
        </Card>
    )
}

export default User
