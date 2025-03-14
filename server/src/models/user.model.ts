import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    NonAttribute,
} from "@sequelize/core";
import {
    Attribute,
    NotNull,
    PrimaryKey,
    AutoIncrement,
    CreatedAt,
    UpdatedAt,
    Table,
    BeforeSave,
    HasMany,
} from "@sequelize/core/decorators-legacy";
import bcrypt from "bcrypt";
import { EventParticipant } from "./votes.model.js";

@Table({ underscored: true })
export class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
> {
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare user_id: CreationOptional<number>;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare first_name: string;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare last_name: string;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare email: string;

    @Attribute(DataTypes.STRING(255))
    @NotNull
    declare password: string;

    @Attribute(DataTypes.TEXT)
    declare refresh_token: CreationOptional<string>;

    @CreatedAt
    declare created_at: CreationOptional<Date>;

    @UpdatedAt
    declare updated_at: CreationOptional<Date>;

    // user may have joined multiple events
    @HasMany(() => EventParticipant, {
        foreignKey: {
            name: "user_id",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
    })
    declare events_participated?: NonAttribute<EventParticipant>;

    @BeforeSave
    static async hashPassword(user: User) {
        if (user.changed("password")) {
            user.password = await bcrypt.hash(user.password, 8);
        }
    }
}
