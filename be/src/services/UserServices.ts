import { UserModel } from "../config/model/UserModel";

export const login = async (args: any) => {
  try {
    const { phone, email, password } = args;
    if ((phone && password) || (email && password)) {
      if (phone) {
        const user = await UserModel.findOne({ phone });
        if (user && user.password === password) {
          return user;
        }
        return;
      } else {
        const user = await UserModel.findOne({ email });
        if (user && user.password === password) {
          return user;
        }
      }
    }
    return;
  } catch (err) {
    console.error(err);
  }
};

export const register = async (args: any) => {
  try {
    const { phone, username, email, password } = args;
    if (username && password && (phone || email)) {
      const user = await UserModel.findOne({
        $or: [{ phone: phone?.trim(), email: email?.trim() }],
      });
      if (user) {
        return;
      } else {
        const newUser = await UserModel.create({
          ...(phone && { phone: phone.trim() }),
          ...(email && { email: email.trim() }),
          username: username.trim(),
          password: password.trim(),
        });
        await newUser.save();
        return newUser;
      }
    }
    return;
  } catch (err) {
    console.error(err);
  }
};

export const delUser = async (args: any) => {
  try {
    const { idUser } = args;
    if (idUser) {
      const user = await UserModel.findByIdAndDelete(idUser);

      if (user) {
        return true;
      }
    }
    return;
  } catch (err) {
    console.error(err);
  }
};

export const updateInforUser = async (args: any) => {
  try {
    const { idUser, username, address, avatar } = args;
    if (idUser && (username || address || avatar)) {
      let fieldUpdate: any = {};
      fieldUpdate["address.street"] = address?.street?.trim();
      fieldUpdate["address.city"] = address?.city?.trim();
      fieldUpdate["address.country"] = address?.city?.trim();
      fieldUpdate["username"] = username?.trim();
      fieldUpdate["avatar"] = avatar?.trim();

      if (Object.keys(fieldUpdate).length > 0) {
        const update = await UserModel.findByIdAndUpdate(
          idUser,
          {
            $set: fieldUpdate,
          },
          { new: true }
        );
        if (update) {
          return update;
        }
      }
    }
    return;
  } catch (err) {
    console.error(err);
  }
};

export const updateOrder = async (args: any) => {
  try {
    const { idUser, idProduct, flag } = args;

    if (idUser && idProduct) {
      if (flag) {
        const user = await UserModel.findByIdAndUpdate(
          idUser,
          {
            $push: {
              orders: idProduct,
            },
          },
          { new: true }
        );
        if (user) return user;
      } else {
        const user = await UserModel.findByIdAndUpdate(idUser, {
          $pull: {
            orders: { idProduct },
          },
        });
        if (user) return user;
      }
    }
    return;
  } catch (err) {
    console.error(err);
  }
};

export const updatePayment = async (args: any) => {
  try {
    const { idUser, idProduct } = args;

    if (idUser && idProduct) {
      const user = await UserModel.findByIdAndUpdate(
        idUser,
        {
          $push: {
            payment: idProduct,
          },
        },
        { new: true }
      );
      if (user) return user;
    }
    return;
  } catch (err) {
    console.error(err);
  }
};
