/**
 * Sheshanth Shanigarapu – ML Resources
 * Shared JS: YouTube-style live search across all pages.
 */

const SEARCH_INDEX = [
  /* ═══════ ALGORITHMS (link to their page) ═══════ */
  { name: 'K-Nearest Neighbour', type: 'algorithm', context: 'Supervised Learning', url: 'knn.html' },
  { name: 'KNN',                 type: 'algorithm', context: 'Supervised Learning', url: 'knn.html' },
  { name: 'Decision Tree',       type: 'algorithm', context: 'Supervised Learning', url: 'decision_tree.html' },
  { name: 'Random Forest',       type: 'algorithm', context: 'Supervised Learning', url: 'random_forest.html' },
  { name: 'Logistic Regression', type: 'algorithm', context: 'Supervised Learning', url: 'logistic_regression.html' },
  { name: 'Linear Regression',   type: 'algorithm', context: 'Supervised Learning', url: 'linear_regression.html' },
  { name: 'Polynomial Regression', type: 'algorithm', context: 'Supervised Learning', url: 'polynomial_regression.html' },
  { name: 'Naive Bayes',         type: 'algorithm', context: 'Supervised Learning', url: 'naive_bayes.html' },
  { name: 'Support Vector Machine', type: 'algorithm', context: 'Supervised Learning', url: 'svm.html' },
  { name: 'SVM',                 type: 'algorithm', context: 'Supervised Learning', url: 'svm.html' },
  { name: 'K-Means Clustering',  type: 'algorithm', context: 'Unsupervised Learning', url: 'kmeans.html' },
  { name: 'KMeans',              type: 'algorithm', context: 'Unsupervised Learning', url: 'kmeans.html' },
  { name: 'Principal Component Analysis', type: 'algorithm', context: 'Unsupervised Learning', url: 'pca.html' },
  { name: 'PCA',                 type: 'algorithm', context: 'Unsupervised Learning', url: 'pca.html' },

  /* ═══════ EXAMPLES (link to algorithm page) ═══════ */
  { name: 'Iris Data',           type: 'example', context: 'KNN · Worked Example', url: 'knn.html' },
  { name: 'Iris',                type: 'example', context: 'KNN · Worked Example', url: 'knn.html' },
  { name: 'Play Tennis',         type: 'example', context: 'Decision Tree · Worked Example', url: 'decision_tree.html' },
  { name: 'Churn Modeling',      type: 'example', context: 'Random Forest · Worked Example', url: 'random_forest.html' },
  { name: 'Churn',               type: 'example', context: 'Random Forest · Worked Example', url: 'random_forest.html' },
  { name: 'SMOTE + Churn',       type: 'example', context: 'Random Forest · Worked Example', url: 'random_forest.html' },
  { name: 'Breast Cancer',       type: 'example', context: 'Logistic Regression · Worked Example', url: 'logistic_regression.html' },
  { name: 'Diabetes',            type: 'example', context: 'Logistic Regression · Worked Example', url: 'logistic_regression.html' },
  { name: 'Housing Prices',      type: 'example', context: 'Linear Regression · Worked Example', url: 'linear_regression.html' },
  { name: 'Housing',             type: 'example', context: 'Linear Regression · Worked Example', url: 'linear_regression.html' },
  { name: 'Salary Data',         type: 'example', context: 'Polynomial Regression · Worked Example', url: 'polynomial_regression.html' },
  { name: 'Salary',              type: 'example', context: 'Polynomial Regression · Worked Example', url: 'polynomial_regression.html' },
  { name: 'Mall Customers',      type: 'example', context: 'K-Means · Worked Example', url: 'kmeans.html' },
  { name: 'Mall',                type: 'example', context: 'K-Means · Worked Example', url: 'kmeans.html' },
  { name: 'Wine Dataset',        type: 'example', context: 'PCA · Worked Example', url: 'pca.html' },
  { name: 'Wine',                type: 'example', context: 'PCA · Worked Example', url: 'pca.html' },

  /* ═══════ NOTEBOOKS (open GitHub) ═══════ */
  { name: 'iris.ipynb',           type: 'ipynb', context: 'KNN · Iris Data', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/IRIS_DATA/iris.ipynb' },
  { name: 'IRIS1.IPYNB',          type: 'ipynb', context: 'KNN · Iris Data', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/IRIS_DATA/IRIS1.IPYNB' },
  { name: 'PLAY_TENNIS.ipynb',    type: 'ipynb', context: 'Decision Tree · Play Tennis', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/PLAY_TENNIS/PLAY_TENNIS.ipynb' },
  { name: 'PLAY_TENNIS1.ipynb',   type: 'ipynb', context: 'Naive Bayes · Play Tennis', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/PLAY_TENNIS/PLAY_TENNIS1.ipynb' },
  { name: 'Churn_Modeling.ipynb', type: 'ipynb', context: 'Random Forest · Churn', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/CHURN_MODELING/Churn_Modeling.ipynb' },
  { name: 'SMOTE.ipynb',          type: 'ipynb', context: 'Random Forest · SMOTE', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/SMOTE/SMOTE.ipynb' },
  { name: 'BREAST_CANCER_KERNEL.ipynb', type: 'ipynb', context: 'Logistic Regression · Breast Cancer', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/BREAST_CANCER/BREAST_CANCER_KERNEL.ipynb' },
  { name: 'diabeties.ipynb',      type: 'ipynb', context: 'Logistic Regression · Diabetes', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/DIABETIES/diabeties.ipynb' },
  { name: 'diabeties1.ipynb',     type: 'ipynb', context: 'Logistic Regression · Diabetes', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/DIABETIES/diabeties1.ipynb' },
  { name: 'house.ipynb',          type: 'ipynb', context: 'Linear Regression · Housing', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/HOUSING/house.ipynb' },
  { name: 'SALARY.IPYNB',         type: 'ipynb', context: 'Polynomial Regression · Salary', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/SALARY_DATA/SALARY.IPYNB' },
  { name: 'Polynomial_Regression_on_Salary_Dataset.ipynb', type: 'ipynb', context: 'Polynomial Regression · Salary', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/ipynb%20files/Polynomial_Regression_on_Salary_Dataset.ipynb' },
  { name: 'MALL_CUSTOMERS.IPYNB', type: 'ipynb', context: 'K-Means · Mall Customers', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/K_MEAN_CLUSTER/MALL_CUSTOMERS.IPYNB' },
  { name: 'WINE.IPYNB',           type: 'ipynb', context: 'PCA · Wine', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/WINE/WINE.IPYNB' },
  { name: 'SVM_Breast_Cancer_Kernels.ipynb', type: 'ipynb', context: 'SVM · Breast Cancer', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/ipynb%20files/SVM_Breast_Cancer_Kernels.ipynb' },

  /* ═══════ CSV DATASETS (open GitHub blob) ═══════ */
  { name: 'iris.data.csv',             type: 'csv', context: 'KNN · Iris Data', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/IRIS_DATA/iris.data.csv' },
  { name: 'naive_bayes_practice.csv',  type: 'csv', context: 'Decision Tree · Play Tennis', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/PLAY_TENNIS/naive_bayes_practice.csv' },
  { name: 'Churn_Modelling.csv',       type: 'csv', context: 'Random Forest · SMOTE', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/SMOTE/Churn_Modelling.csv' },
  { name: 'data.csv',                  type: 'csv', context: 'Logistic Regression · Breast Cancer', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/BREAST_CANCER/data.csv' },
  { name: 'diabetes_dirty_dataset.csv',type: 'csv', context: 'Logistic Regression · Diabetes', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/DIABETIES/diabetes_dirty_dataset.csv' },
  { name: 'Housing (1).csv',           type: 'csv', context: 'Linear Regression · Housing', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/HOUSING/Housing%20(1).csv' },
  { name: 'SALARY_DATA.csv',           type: 'csv', context: 'Polynomial Regression · Salary', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/SALARY_DATA/SALARY_DATA.csv' },
  { name: 'Mall_customers.csv',        type: 'csv', context: 'K-Means · Mall Customers', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/main/K_MEAN_CLUSTER/Mall_customers.csv' },

  /* ═══════ PDFs ═══════ */
  { name: 'KNN.pdf',                          type: 'pdf', context: 'KNN · Theory', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/THEORY/KNN.pdf' },
  { name: 'KNN ALGORITHAM.pdf',               type: 'pdf', context: 'KNN · Code', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/CODE/KNN%20ALGORITHAM.pdf' },
  { name: 'RandomForest.pdf',                 type: 'pdf', context: 'Random Forest · Theory', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/THEORY/RandomForest.pdf' },
  { name: 'NaiveBayes.pdf',                   type: 'pdf', context: 'Naive Bayes · Theory', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/THEORY/NaiveBayes.pdf' },
  { name: 'NaiveBayes_SMOTE.pdf',             type: 'pdf', context: 'Naive Bayes · Code', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/CODE/NaiveBayes_SMOTE.pdf' },
  { name: 'SVM.pdf',                          type: 'pdf', context: 'SVM · Theory', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/THEORY/SVM.pdf' },
  { name: 'SVM_Breast_Cancer_Kernels.pdf',    type: 'pdf', context: 'SVM · Code', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/CODE/SVM_Breast_Cancer_Kernels.pdf' },
  { name: 'Polynomial_Regression.pdf',        type: 'pdf', context: 'Polynomial Regression · Code', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/CODE/Polynomial_Regression.pdf' },
  { name: 'Unsupervised-Kmeans.pdf',          type: 'pdf', context: 'K-Means · Theory', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/THEORY/Unsupervised-Kmeans.pdf' },
  { name: 'KMeans_Mall_Customers.pdf',        type: 'pdf', context: 'K-Means · Code', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/CODE/KMeans_Mall_Customers.pdf' },
  { name: 'OVERFIT L1 L2 LASO.pdf',           type: 'pdf', context: 'Linear Regression · Regularization', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/CODE/OVERFIT%20L1%20L2%20LASO.pdf' },
  { name: 'SDC1-WEEK1-SESSION1-ML-INTRODUCTION-PART-A.pdf', type: 'pdf', context: 'General · ML Intro', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/THEORY/SDC1-WEEK1-SESSION1-ML-INTRODUCTION-PART-A.pdf' },
  { name: 'SKILLING-WEEK1-Day2-PARTB-EVALUATION-METRICS.pdf', type: 'pdf', context: 'General · Evaluation', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/THEORY/SKILLING-WEEK1-Day2-PARTB-EVALUATION-METRICS.pdf' },
  { name: 'SDC1-WEEK1-Day2-OVERFITTING-REGULARIZATION-PART-A (1).pdf', type: 'pdf', context: 'General · Regularization', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/THEORY/SDC1-WEEK1-Day2-OVERFITTING-REGULARIZATION-PART-A%20(1).pdf' },

  /* ═══════ DOCX ═══════ */
  { name: 'DECISION TREE-ID3-PLAYTENNIS.docx', type: 'docx', context: 'Decision Tree · Theory', url: 'https://github.com/shanigarapusheshanth2007-wq/sheshanth/blob/ML_RESOURCES/RESOURCES/THEORY/DECISION%20TREE-ID3-PLAYTENNIS.docx' }
];

/* ─── Badge colors per type ─── */
const BADGE_STYLES = {
  algorithm: 'background:#d1f4ea;color:#0d8c6c;border:1px solid #a7f3d0;',
  example:   'background:#e0e7ff;color:#4338ca;border:1px solid #c7d2fe;',
  ipynb:     'background:#fff4e5;color:#c2410c;border:1px solid #fed7aa;',
  csv:       'background:#ecfdf5;color:#047857;border:1px solid #a7f3d0;',
  pdf:       'background:#fef2f2;color:#b91c1c;border:1px solid #fecaca;',
  docx:      'background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;'
};

const MAX_RESULTS = 8;

document.addEventListener('DOMContentLoaded', () => {

  /* ─── Search logic ─── */
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');

  if (searchInput && searchResults) {
    let activeIdx = -1;

    const escapeHtml = (s) =>
      s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    const highlightMatch = (text, query) => {
      if (!query) return escapeHtml(text);
      const idx = text.toLowerCase().indexOf(query.toLowerCase());
      if (idx === -1) return escapeHtml(text);
      const before = escapeHtml(text.slice(0, idx));
      const match = escapeHtml(text.slice(idx, idx + query.length));
      const after = escapeHtml(text.slice(idx + query.length));
      return `${before}<mark>${match}</mark>${after}`;
    };

    const renderResults = (query) => {
      const q = query.trim().toLowerCase();
      if (!q) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        activeIdx = -1;
        return;
      }

      const matches = SEARCH_INDEX
        .filter(item =>
          item.name.toLowerCase().includes(q) ||
          item.context.toLowerCase().includes(q)
        )
        .slice(0, MAX_RESULTS);

      if (matches.length === 0) {
        searchResults.innerHTML = `<div class="search-empty">No results for "<strong>${escapeHtml(query)}</strong>"</div>`;
        searchResults.classList.add('active');
        activeIdx = -1;
        return;
      }

      searchResults.innerHTML = matches.map((item, i) => `
        <a class="search-item" data-idx="${i}" href="${item.url}" target="${item.url.startsWith('http') ? '_blank' : '_self'}" rel="noopener">
          <span class="search-item-badge" style="${BADGE_STYLES[item.type] || ''}">${item.type}</span>
          <span class="search-item-info">
            <span class="search-item-name">${highlightMatch(item.name, query.trim())}</span>
            <span class="search-item-context">${escapeHtml(item.context)}</span>
          </span>
        </a>
      `).join('');

      searchResults.classList.add('active');
      activeIdx = -1;
    };

    searchInput.addEventListener('input', (e) => renderResults(e.target.value));
    searchInput.addEventListener('focus', (e) => { if (e.target.value) renderResults(e.target.value); });

    searchInput.addEventListener('keydown', (e) => {
      const items = searchResults.querySelectorAll('.search-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIdx = (activeIdx + 1) % items.length;
        items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIdx = (activeIdx - 1 + items.length) % items.length;
        items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIdx >= 0 && items[activeIdx]) items[activeIdx].click();
        else if (items[0]) items[0].click();
      } else if (e.key === 'Escape') {
        searchResults.classList.remove('active');
        searchInput.blur();
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-wrap')) {
        searchResults.classList.remove('active');
      }
    });
  }

  /* ─── Fade-in on scroll ─── */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.category-card, .algo-select-card, .example').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    observer.observe(el);
  });

});