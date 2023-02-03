const respApi = (res, msg, data) => {
    res.json(
        {
            msg: msg,
            total: data.length,
            data: data,
        }
    );
};

module.exports = {respApi};