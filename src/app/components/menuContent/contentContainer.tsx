import { useContentContext } from '@/app/contexts/ContentContext'
import ChatContent from './chatContent';
import RulesContent from './rulesContent';
import React from 'react'
import RankingContent from './rankingContent';
import RewardsContent from './rewardsContent';

type Position = string;


export default function ContentContainer() {
    const { content } = useContentContext();

    let position: Position = '';
    switch (content) {
        case 'chat':
            position = "col-start-10";
            break;

        case 'ranking':
            position = 'col-start-2';
            break;

        case 'rewards':
            position = 'col-start-1';
            break;

        case 'rules':
            position = 'col-start-8';
            break;

        default:
            break;
    }

    return (
        <div className='grid grid-cols-12'>
            {content &&
                <div className={`${position}`}>
                    {content == 'chat' ? (
                        <ChatContent />
                    ) :
                        content == 'ranking' ? (
                            <RankingContent />
                        ) :
                            content == 'rewards' ? (
                                <RewardsContent />
                            ) :
                                content == 'rules' ? (
                                    <RulesContent />
                                ) : null
                }
                </div>}
        </div>
    )
}