﻿using EduLinks.Application.Commands;
using EduLinks.Application.Queries;
using EduLinks.Domain.EduLinksAggregate.Requests;
using IBigDataPortal.Domain.UserMetadata;
using JobOffers.Application.Commands;
using JobOffers.Application.Queries;
using JobOffers.Domain.PostsAggregate.Requests;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Posts.Domain.PostsAggregate.ViewModels;

namespace IBigDataPortal.Controllers;

[ApiController]
[Authorize]
[Route("[controller]")]
public class EduLinksController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly IUser _user;

    public EduLinksController(IMediator mediator, IUser user)
    {
        _mediator = mediator;
        _user = user;
    }

    [HttpPost]
    public async Task<ActionResult> CreateEduLink(CreateEduLinkRequest body)
    {
        await _mediator.Send(new CreateEduLinkCommand(body, _user.Id));
        return Ok();
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<PostViewModel>>> GetAllEduLinks()
    {
        var result = await _mediator.Send(new
            GetAllEduLinksQuery());
        return Ok(result);
    }
}