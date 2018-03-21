# Django Dependencies
from django.shortcuts import render
from django.views import View
from django.http import HttpResponse
from .sensitive_settings import NEWS_API_KEY, NEWS_BASE_URL
import json

# Third-party apps
from newsapi import NewsApiClient
# from pyteaser import SummarizeUrl

from sumy.parsers.html import HtmlParser
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer as Summarizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words

LANGUAGE = 'english'

def articles(request, endpoint):
    newsapi = NewsApiClient(api_key=NEWS_API_KEY)

    if endpoint == 'topheadlines':
        query = request.GET.get('q', '')
        sources = request.GET.get('sources', '')
        category = request.GET.get('category', '')
        country = request.GET.get('country', '')
        response = newsapi.get_top_headlines(language='en',
                                             q=query,
                                             category=category,
                                             sources=sources,
                                             country=country)
    
    if endpoint == 'all':
        query = request.GET.get('q', '')
        sources = request.GET.get('sources', '')
        domains = request.GET.get('domains', '')
        from_parameter = request.GET.get('from_parameter', '2018-01-01')
        to_parameter = request.GET.get('to', '')
        language = request.GET.get('language', 'en')
        sort_by = request.GET.get('sort_by', 'publishedAt')

        response = newsapi.get_everything(q=query,
                                          sources=sources,
                                          domains=domains,
                                          from_parameter=from_parameter,
                                          to=to_parameter,
                                          language=language,
                                          sort_by=sort_by)

    if endpoint == 'sources':
        response = newsapi.get_sources()

    return HttpResponse(content=json.dumps(response), content_type='application/json')

def article_summary(request):
    url = request.GET.get('url', '')
    count = request.GET.get('count', 5)
    parser = HtmlParser.from_url(url, Tokenizer(LANGUAGE))
    stemmer = Stemmer(LANGUAGE)
    summarizer = Summarizer(stemmer)
    summarizer.stop_words = get_stop_words(LANGUAGE)
    summary = []

    for sentence in summarizer(parser.document, count):
        summary.append(str(sentence))

    return HttpResponse(json.dumps({"summary": summary}), content_type='application/json')
