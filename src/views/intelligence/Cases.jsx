import React, { Component } from "react";

import Cases from "../../components/case/Cases.jsx";

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  cases = [
    {
      key: "create-ii",
      type: "wide",
      isMulti: true,
      noSlider: true,
      nameKey: "AI creation",
      title: [
        {
          type: "text",
          content: "Создание ИИ",
        },
        {
          type: "icon",
          content: "emodzi-14.png",
          class: "_icon14",
        },
      ],
      description: "3 последовательных этапа работ",
      tabs: [
        {
          key: "brief",
          nameKey: "Technical task",
          content: "Техническое задание",
        },
        {
          key: "analys",
          nameKey: "Analysis and architecture",
          content: "Анализ и архитектура",
        },
        {
          key: "dev",
          nameKey: "Integration development ML",
          content: "Итерационная разработка ML",
        },
      ],
      content: {
        brief: [
          {
            type: "list",
            items: [
              "Описание идеи в тех документ",
              "Постановка задач машинного обучения",
              "Документирование ожидаемого результата",
            ],
          },
          {
            type: "about",
            content:
              "На данном этапе описывается: «что, зачем, для чего и в каком виде нужно достичь с помощью искусственного интеллекта». Т.е. на техническом языке описывается требуемый функционал машинного обучения и ожидаемый результат на выходе",
          },
          {
            type: "price",
            price: "37 250",
            duration: "7 дней",
          },
        ],
        analys: [
          {
            type: "list",
            items: [
              "Поиск подходящего решения",
              "Проектирование архитектуры",
              "Взаимодействие логики и технологий",
            ],
          },
          {
            type: "about",
            content:
              "На данном этапе происходит работа в направлении: «как, с помощью чего и в какой интерпретации будет достигаться требуемый результат из ТЗ». Т.е. будет определена платформа создания искусственного интеллекта в сочетании со всеми необходимыми технологиями и их структурной связью",
          },
          {
            type: "price",
            price: "45 000",
            duration: "10 дней",
          },
        ],
        dev: [
          {
            type: "list",
            items: [
              "Создание и обучение модели",
              "Тестирование на новых данных",
              "Оптимизация до приемлемого результата",
            ],
          },
          {
            type: "about",
            content:
              "На данном этапе происходит создание искусственного интеллекта. Т.е. строятся и обучаются модели, тестируется полученный результат на данных (которых раньше она не видела), оценивается результат, на сколько хорошо она справляется с задачей, оптимизируется модель, пока она не будет работать достаточно хорошо, после чего, все собирается и подготавливается для интеграции в проект ",
          },
          {
            type: "price",
            price: "337 600",
            duration: "30 дней",
          },
        ],
      },
      items: [
        {
          key: "brief",
          image: "screen-create-ii-1.png",
          name: "Пример проекта <br class='_elemDesktop'/>Find by Face",
        },
        {
          key: "analys",
          image: "screen-create-ii-2.png",
          name:
            "Пример архитектуры <br class='_elemDesktop'/>проекта Find by Face",
        },
        {
          key: "dev",
          image: "screen-create-ii-3.png",
        },
      ],
    },
    {
      key: "system-for-ii",
      type: "wide",
      isEmpty: true,
      noSlider: true,
      nameKey: "Ecosystem",
      title: [
        {
          type: "text",
          content: "Экосистема для ИИ",
        },
        {
          type: "icon",
          content: "emodzi-20.png",
          class: "_icon20",
        },
      ],
      description: "Для использования искусственного интеллекта",
      content: [
        {
          type: "list",
          items: [
            "Back-end (веб-сервисы, БД, API)",
            "Мобильное приложение (iOS/Android)",
            "Интеграция машинного обучения в проект",
          ],
        },
        {
          type: "about",
          content:
            "Разработанный ИИ необходимо как-то использовать, т.е. где-то хранить данные и где-то выводить результат. Для этого, создается связка из серверной части (back-end) и клиентской части (мобильного приложения), после чего, интегрируется модуль машинного обучения и собирается все в одну систему",
        },
        {
          type: "price",
          price: "450 000",
          duration: "40 дней",
        },
      ],
      items: [
        {
          key: "system-for-ii",
          image: "screen-system-for-ii-1.png",
        },
      ],
    },
    {
      key: "fullDev-ii",
      type: "wide",
      noSlider: true,
      nameKey: "Turnkey project",
      title: [
        {
          type: "text",
          content: "Проект под ключ",
        },
        {
          type: "icon",
          content: "emodzi-15.png",
          class: "_icon15",
        },
      ],
      description: "Экосистема с искусственным интеллектом",
      content: [
        {
          type: "list",
          items: [
            "Создание ИИ (ТЗ, анализ, архитектура, ML модели)",
            "Разработка back-end (веб-сервисы, БД, API)",
            "Реализация мобильного приложения (iOS либо Android)",
          ],
        },
        {
          type: "about",
          content:
            "Эффективное решение задачи основанное на создании полноценной экосистемы с машинным обучением (ML). Использование ИИ через мобильное приложение, интеграция сторонних систем и сервисов с помощью back-end. Функционально масштабируема и легко поддерживается",
        },
        {
          type: "price",
          price: "870 750",
          duration: "3 месяцев",
        },
      ],
      items: [
        {
          key: "fullDev-ii",
          image: "screen-fullDev-ii-1.png",
        },
      ],
    },
  ];

  render() {
    const { elements } = this.props;
    
    return <Cases elements={elements} model={{ cases: this.cases }} />;
  }
}

export default View;
