import { useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';

import styles from './styles/index.module.scss';

export const App = () => {
	const [articleSettings, setArticleSettings] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={clsx(
				styles.main,
				styles[articleSettings.fontSizeOption.className],
				styles[articleSettings.contentWidth.className],
				styles[articleSettings.backgroundColor.className],
				styles[articleSettings.fontColor.className],
				styles[articleSettings.fontFamilyOption.className]
			)}>
			<ArticleParamsForm changeCallback={setArticleSettings} />
			<Article />
		</main>
	);
};
