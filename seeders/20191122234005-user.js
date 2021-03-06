'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert(
            'Users',
            [
                {
                    name: 'Ahmed',
                    phone: '0123456789',
                    email: 'a@ahmed.com',
                    committee: 'IT',
                    university: 'Cairo',
                    faculty: 'Science',
                    position: 'member',
                },
            ],
            {
                timestamps: true,
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkDelete('Users', null, {});
    },
};
