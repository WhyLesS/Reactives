import { CustomButton } from '../custom-button/custom-button';
import { useUser } from '../user-context/user-context';

export function UserAuthButton() {
    const { value: user, toggleUserAuth } = useUser();

    return (
        <CustomButton
            onClick={toggleUserAuth}
            text={user === undefined ? 'Sign in' : 'Sign out'}
        />
    );
}
