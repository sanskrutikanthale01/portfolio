import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught application error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#090d16] flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 bg-slate-900 border border-red-500/30 rounded-2xl shadow-2xl">
            <div className="w-12 h-12 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center mx-auto mb-4 font-mono font-bold text-xl">
              !
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Interface Render Notice</h2>
            <p className="text-sm text-slate-400 mb-6">
              An error occurred while loading this section. Our state boundary caught the exception safely.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Refresh Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
