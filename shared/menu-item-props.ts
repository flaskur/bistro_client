import Option from '../shared/option';

export default interface MenuItemProps {
	name: string;
	category: string;
	spicy: boolean;
	description: string;
	options: Option[];
};
