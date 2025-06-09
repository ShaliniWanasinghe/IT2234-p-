//Q4

const filterByField = async (model, field, value) => {
    try {
        const results = await model.find({ [field]: value });
        return results;
    } catch (error) {
        throw new Error(`Error filtering by ${field}`);
    }
};

module.exports = { filterByField };
