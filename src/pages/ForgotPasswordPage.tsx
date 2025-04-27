import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, Mail, AlertCircle, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ForgotPasswordPage: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add your password reset logic here
      console.log('Password reset request for:', email);
      
      setSuccess(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError(t('forgotPassword.errorMessage'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-500 px-6 py-8 text-white text-center">
            <KeyRound className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-2xl font-bold">{t('forgotPassword.title')}</h1>
            <p className="text-green-100 mt-2">{t('forgotPassword.subtitle')}</p>
          </div>

          {success ? (
            <div className="p-6">
              <div className="bg-green-50 text-green-600 p-4 rounded-lg mb-6">
                <p className="text-center">
                  {t('forgotPassword.successMessage', { email })}
                </p>
              </div>
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 text-green-600 hover:text-green-500 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                {t('forgotPassword.backToLogin')}
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  <span>{error}</span>
                </div>
              )}

              <p className="text-gray-600">
                {t('forgotPassword.instruction')}
              </p>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('forgotPassword.emailLabel')}
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
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t('forgotPassword.sending')}</span>
                  </>
                ) : (
                  <>
                    <KeyRound className="h-5 w-5" />
                    <span>{t('forgotPassword.resetPassword')}</span>
                  </>
                )}
              </button>

              <Link
                to="/login"
                className="block text-center text-sm text-green-600 hover:text-green-500 transition-colors"
              >
                {t('forgotPassword.backToLogin')}
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
