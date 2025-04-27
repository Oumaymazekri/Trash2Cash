import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, AlertCircle, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const RegisterPage: React.FC = () => {
  const { t } = useTranslation(); // Ajoute le hook useTranslation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validatePassword = (pass: string) => {
    const minLength = pass.length >= 8;
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasLowerCase = /[a-z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    return { minLength, hasUpperCase, hasLowerCase, hasNumber };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError(t('register.errors.passwordMismatch'));
      return;
    }

    const validation = validatePassword(password);
    if (!Object.values(validation).every(Boolean)) {
      setError(t('register.errors.passwordCriteria'));
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add your registration logic here
      console.log('Registration attempt:', { name, email, password });
      
      // Redirect on success
      // navigate('/dashboard');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError(t('register.errors.generalError'));
    } finally {
      setIsLoading(false);
    }
  };

  const passwordValidation = validatePassword(password);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-500 px-6 py-8 text-white text-center">
            <UserPlus className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-2xl font-bold">{t('register.title')}</h1>
            <p className="text-green-100 mt-2">
              {t('register.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t('register.fields.name')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                  placeholder={t('register.fields.namePlaceholder')}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('register.fields.email')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                  placeholder={t('register.fields.emailPlaceholder')}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                {t('register.fields.password')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className={`h-4 w-4 rounded-full flex items-center justify-center ${passwordValidation.minLength ? 'bg-green-500' : 'bg-gray-200'}`}>
                    {passwordValidation.minLength && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span className={passwordValidation.minLength ? 'text-green-600' : 'text-gray-500'}>
                    {t('register.passwordCriteria.length')}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className={`h-4 w-4 rounded-full flex items-center justify-center ${passwordValidation.hasUpperCase && passwordValidation.hasLowerCase ? 'bg-green-500' : 'bg-gray-200'}`}>
                    {passwordValidation.hasUpperCase && passwordValidation.hasLowerCase && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span className={passwordValidation.hasUpperCase && passwordValidation.hasLowerCase ? 'text-green-600' : 'text-gray-500'}>
                    {t('register.passwordCriteria.uppercaseLowercase')}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className={`h-4 w-4 rounded-full flex items-center justify-center ${passwordValidation.hasNumber ? 'bg-green-500' : 'bg-gray-200'}`}>
                    {passwordValidation.hasNumber && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span className={passwordValidation.hasNumber ? 'text-green-600' : 'text-gray-500'}>
                    {t('register.passwordCriteria.number')}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                {t('register.fields.confirmPassword')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded transition-colors"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                {t('register.terms.accept')}
                <a href="#" className="text-green-600 hover:text-green-500">
                  {t('register.terms.link')}
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{t('register.submit.loading')}</span>
                </>
              ) : (
                <>
                  <UserPlus className="h-5 w-5" />
                  <span>{t('register.submit')}</span>
                </>
              )}
            </button>

            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">{t('register.or')}</span>
              </div>
            </div>

            <p className="text-center text-sm text-gray-600">
              {t('register.alreadyRegistered')}
              <Link 
                to="/login" 
                className="text-green-600 hover:text-green-500 font-medium transition-colors"
              >
                {t('register.loginLink')}
              </Link>
            </p>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          {t('register.footer')}
          <a href="#" className="text-green-600 hover:text-green-500">
            {t('register.footerTerms')}
          </a>
          {t('register.footerAnd')}
          <a href="#" className="text-green-600 hover:text-green-500">
            {t('register.footerPrivacy')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
