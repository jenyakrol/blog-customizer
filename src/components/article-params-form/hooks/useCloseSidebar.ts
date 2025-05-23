import { RefObject, useEffect } from 'react';

export const useCloseSidebar = (
	isMenuOpen: boolean,
	setIsMenuOpen: (state: boolean) => void,
	sidebar: RefObject<HTMLElement>
) => {
	useEffect(() => {
		if (!isMenuOpen) return;
		const handleClick = (event: MouseEvent) => {
			if (
				isMenuOpen &&
				sidebar.current &&
				!sidebar.current.contains(event.target as Node)
			) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClick);
		return () => document.removeEventListener('mousedown', handleClick);
	}, [isMenuOpen]);
};
