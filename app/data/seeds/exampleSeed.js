exports.seed = function(knex, Promise) {
    return knex("modelName")
                .truncate()
                .then(() => {
                    return knex("modelName").insert([
                        {
                            first_name: "value",
                            email: "value"
                        }
                    ])
                })
}