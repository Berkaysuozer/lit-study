import { format } from 'date-fns';

export function formatDate(date) {
    return format(date, 'dd/MM/yyyy');
}

export function formatDateForInput(date) {
    return format(date, 'yyyy-MM-dd');
}

export function formatPhone(phone) {
  if (!phone) {
    return '';
  } else {
    const number = phone.slice(-10); 
    return `+90 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
  }
} 