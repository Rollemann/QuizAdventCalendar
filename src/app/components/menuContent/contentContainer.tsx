import { useContentContext } from '@/app/contexts/ContentContext'
import ChatContent from './chatContent';
import RulesContent from './rulesContent';
import React from 'react'
import RankingContent from './rankingContent';
import RewardsContent from './rewardsContent';

type Position = 'self-end' | '';


export default function ContentContainer() {
    const { content, setContent } = useContentContext();

    let position: Position = '';
    switch (content) {
        case 'chat':
            position = "self-end";
            break;

        case 'ranking':
            position = '';
            break;

        case 'rewards':
            position = '';
            break;

        case 'rules':
            position = 'self-end';
            break;

        default:
            break;
    }

    return (
        <>
            {content && <div onClick={() => setContent(null)} className={`${position} w-max border-2 border-solid border-black`}>
                {content == 'chat' ? (
                    <ChatContent />
                ) :
                    content == 'ranking' ? (
                        <RankingContent />
                    ) :
                        content == 'rewards' ? (
                            <RewardsContent />
                        ) :
                            <RulesContent />
                }
            </div>}
        </>
    )
}