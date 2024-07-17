import { CustomButton } from '../custom-button/custom-button';
import { useUser } from '../user-context/user-context';

export function UserAuthButton() {
    const { value: user, authUser } = useUser();
    const { value: user } = useUser();

    return (
        <CustomButton
            onClick={authUser}
            text={user === undefined ? 'Sign in' : user.firstName}
            disabled={false}
        />
    );
}
