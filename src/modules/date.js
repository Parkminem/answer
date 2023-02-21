/**
 * 날짜 표시 년,월,일 로 변경
 * @param {date객체} date
 * @returns yyyy.mm.dd
 */
export const formatDate = (date) => {
	const yyyy = date.getFullYear();
	const year = yyyy > 10 ? yyyy : `0${yyyy}`;
	const mm = 1 + date.getMonth();
	const month = mm > 10 ? mm : `0${mm}`;
	const dd = date.getDate();
	const day = dd > 10 ? dd : `0${dd}`;
	return `${year}.${month}.${day}`;
};
