const { Router } = require('express');
const router = Router();

// /movie/add
router.post('/add', async (req, res) => {
  try {
    const { email, movies } = req.body;

    const movies = await Movies.findOne({ email });

    if (!movies) {
      return res.status(400).json({ message: 'Пользователь не найден' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' });  // Существует мнение, что данное сообщение лучше не отправлять, чтобы не помогать хакерам 
    }

    const token = jwt.sign(
      { userId: user.id },
      config.get('jwtSecret'),
      { expiresIn: '1h' }
    );

    res.json({ token, userId: user.id });

  } catch (err) {
    res.status(500).json('{message: Что-то пошло не так');
  }
});