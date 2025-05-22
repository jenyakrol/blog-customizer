import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useState } from 'react';
import clsx from 'clsx';
import { Select } from 'src/ui/select';
import {
  ArticleStateType,
  backgroundColors,
  contentWidthArr,
  defaultArticleState,
  fontColors,
  fontFamilyOptions,
  fontSizeOptions,
  OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';

type ArticleParamsFormProps = {
  changeCallback: (change: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
  changeCallback,
}: ArticleParamsFormProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [unsubmittedParams, setUnsubmittedParams] =
    useState<ArticleStateType>(defaultArticleState);

  const toggleOpenState = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeCallback(unsubmittedParams);
  };

  const handleReset = () => {
    changeCallback(defaultArticleState);
    setUnsubmittedParams(defaultArticleState);
  };

  const handleChange = (change: OptionType, name: string) => {
    setUnsubmittedParams({ ...unsubmittedParams, [name]: change });
  };

  return (
    <>
      <ArrowButton isOpen={isOpen} onClick={toggleOpenState} />
      <aside
        className={clsx(styles.container, { [styles.container_open]: isOpen })}>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          onReset={handleReset}>
          <Text as='h2' size={31} weight={800} uppercase={true}>
            Задайте параметры
          </Text>
          <Select
            selected={unsubmittedParams.fontFamilyOption}
            options={fontFamilyOptions}
            title='ШРИФТ'
            onChange={(change) => handleChange(change, 'fontFamilyOption')}
          />
          <RadioGroup
            name='size'
            title='РАЗМЕР ШРИФТА'
            selected={unsubmittedParams.fontSizeOption}
            options={fontSizeOptions}
            onChange={(change) => handleChange(change, 'fontSizeOption')}
          />
          <Select
            selected={unsubmittedParams.fontColor}
            options={fontColors}
            title='ЦВЕТ ШРИФТА'
            onChange={(change) => handleChange(change, 'fontColor')}
          />
          <Separator />
          <Select
            selected={unsubmittedParams.backgroundColor}
            options={backgroundColors}
            title='ЦВЕТ ФОНА'
            onChange={(change) => handleChange(change, 'backgroundColor')}
          />
          <Select
            selected={unsubmittedParams.contentWidth}
            options={contentWidthArr}
            title='ШИРИНА КОНТЕНТА'
            onChange={(change) => handleChange(change, 'contentWidth')}
          />
          <div className={styles.bottomContainer}>
            <Button title='Сбросить' htmlType='reset' type='clear' />
            <Button title='Применить' htmlType='submit' type='apply' />
          </div>
        </form>
      </aside>
    </>
  );
};
