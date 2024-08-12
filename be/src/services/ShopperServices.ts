import { ShopperModel } from "../config/model/ShopperModel";

export const loginShop = async (args: any) => {
  try {
    const { phone, email, password } = args;
    if ((phone && password) || (email && password)) {
      if (phone) {
        const user = await ShopperModel.findOne({ phone });
        if (user && user.password === password) {
          return user;
        }
        return;
      } else {
        const user = await ShopperModel.findOne({ email });
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

export const registerShop = async (args: any) => {
  try {
    const { phone, shopName, email, password } = args;
    if (shopName && password && (phone || email)) {
      const user = await ShopperModel.findOne({
        $or: [{ phone: phone?.trim(), email: email?.trim() }],
      });
      if (user) {
        return;
      } else {
        const newUser = await ShopperModel.create({
          ...(phone && { phone: phone.trim() }),
          ...(email && { email: email.trim() }),
          shopName: shopName.trim(),
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
      const user = await ShopperModel.findByIdAndDelete(idUser);

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
        const update = await ShopperModel.findByIdAndUpdate(
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
        const user = await ShopperModel.findByIdAndUpdate(
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
        const user = await ShopperModel.findByIdAndUpdate(idUser, {
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
      const user = await ShopperModel.findByIdAndUpdate(
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
