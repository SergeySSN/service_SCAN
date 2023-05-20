import BeginnerIcon from '../elements/Bulb_electric.svg';
import ProIcon from '../elements/Darts.svg';
import BusinessIcon from '../elements/Desctop.svg';

// export const defaultValuesLogin = {
// 	login: 'sf_student1',
// 	password: '4i2385j'
// }


export const Contacts = {
	address: 'Москва, Цветной б-р, 40',
	phone:'+7 495 771 21 11',
	mail:'info@scan.ru'
}

export const navMenu = [
	{title:"Главная"},
	{title: "Тарифы"},
	{title: "FAQ"}
]

export const Content = {
	mainHeader: 'сервис по поиску публикаций о компании по его ИНН',
	mainDescription: 'Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.'
}

export const tariffs = [
	{ name: 'Beginner',
		marker: 'Текущий тариф',
		price: '799 p.',
		oldprice: '1200 p.',
		credit:' или 150 р./мес. при рассрочке 24 мес.',
		description: 'Для небольшого исследования',
	  features:['Безлимитная история запросов','Безопасная сделка','Поддержка 24/7'],
		background: 'var(--a1-color)',
		color:'var(--m2-color)',
		iconSrc: BeginnerIcon,
		action: 'Подробнее',
		currentaction: 'Перейти в личный кабинет'
	},
	{ name: 'Pro',
		marker: '',
		price: '1299 p.',
		oldprice: '2600 p.',
		credit:' или 279 р./мес. при рассрочке 24 мес.',
		description: 'Для HR и фрилансеров',
		features:['Все пункты тарифа Beginner','Экспорт истории','Рекомендации по приоритетам'],
		background: 'var(--a2-color)',
		color: 'var(--m2-color)',
		iconSrc: ProIcon,
		action: 'Подробнее',
		currentaction: 'Перейти в личный кабинет'
	},
	{ name: 'Business',
		marker: '',
		price: '2379 p.',
		oldprice: '3700 p.',
		credit: '',
		description: 'Для корпоративных клиентов',
		features:['Все пункты тарифа Pro','Безлимитное количество запросов','Приоритетная поддержка'],
		background: 'var(--m2-color)',
		color: 'var(--m3-color)',
		iconSrc: BusinessIcon,
		action: 'Подробнее',
		currentaction: 'Перейти в личный кабинет'
},
]

export const searchFilters = [
	{title: 'maxFullness', description: 'Признак максимальной полноты'},
	{title: 'inBusinessNews', description: 'Упоминание в бизнес контексте'},
	{title: 'onlyMainRole', description: 'Главная роль в публикации'},
	{title: 'onlyWithRiskFactors', description: 'Публикации только с риск-факторами'},
	{title: 'isTechNews', description: 'Включать технические новости рынков'},
	{title: 'isAnnouncements', description: 'Включать анонсы и календари'},
	{title: 'isDigest', description: 'Включать сводки новостей'}
]

export const HistogramTitles = ['Период', "Всего", "Риски"]



