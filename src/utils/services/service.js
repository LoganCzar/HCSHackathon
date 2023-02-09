import http from '../http-commons';

const getAll = () => {
    return http.get('/api/users?page=2');
};

const Service = {
    getAll,
};

export default Service;
