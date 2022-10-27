import React, { Component } from "react";
import { connect } from "react-redux";
import Stages from "../../components/case/Stages";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  stages = {
    title:
      "<span class='title__elem'>Этапы</span> <span class='title__elem'>реализации</span> <span class='title__elem'>ИИ</span>",
    description:
      "*Управление и контроль этапами реализации (менеджмент). Тестирование и отладка (QA/QC). Взаимодействие со сторонними системами и сервисами (API). Размещение проекта на сервере (хостинг). Подготовка и публикация приложения (App Store/Google Play). Техническая поддержка на 12 месяцев (бесплатно).",
    items: [
      {
        content: "Функциональные требования",
        start: 0,
        duration: 2,
      },
      {
        content: "Техническое задание",
        start: 2.7,
        duration: 8,
      },
      {
        content: "Анализ",
        start: 6,
        duration: 8,
      },
      {
        content: "Проектирование архитектуры",
        start: 14.5,
        duration: 8.5,
      },
      {
        content: "Создание ИИ",
        start: 19,
        duration: 37,
      },
      {
        content: "Дизайн для приложения",
        start: 49.5,
        duration: 13.5,
      },
      {
        content: "Разработка серверной части",
        start: 53,
        duration: 38,
      },
      {
        content: "Реализация приложения",
        start: 56,
        duration: 38,
      },
      {
        content: "Интеграция ИИ в проект",
        start: 72,
        duration: 20,
      },
      {
        content: "Контроль достижения качества*",
        start: 0,
        duration: 100,
      },
    ],
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  };

  render() {
    return <Stages model={this.stages} />;
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(View);
