import { useTheme } from '../theme-context/theme-context';
import { CustomButton } from '../custom-button/custom-button';

export function ToggleThemeButton() {
    const { value: theme, toggleTheme } = useTheme();

    return (
        <CustomButton
            text={theme === 'dark' ? 'to light' : 'to dark'}
            onClick={toggleTheme}
        />
    );
}
