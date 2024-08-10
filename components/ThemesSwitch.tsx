import { FC, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemesSwitch: FC = () => {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if(currentTheme === "dark") {
            return <FaSun className="text-xl" role="button" onClick={() => setTheme('light')} />;
        } else {
            return <FaMoon className="text-xl" role="button" onClick={() => setTheme('dark')} />;
        }
    };

    return (
        <div className='flex items-center justify-center rounded-full h-9 w-9 bg-slate-200 dark:bg-neutral-700 text-slate-900 dark:text-zinc-50 dark:hover:bg-sky-600 hover:bg-sky-500 hover:text-white'>
            {renderThemeChanger()}
        </div>
    );
};

export default ThemesSwitch;
